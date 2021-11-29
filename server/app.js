const express = require('express');
const { Agent } = require('./model');

const app = express();
app.use(express.urlencoded());
app.use(express.json())

app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});

// create a new agent
app.post('/agent', (req, res) => {
  const agent = new Agent({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    photoUrl: req.body.photoUrl,
    agentLicence: req.body.agentLicence,
    address: req.body.address,
    practiceAreas: req.body.practiceAreas,
    aboutMe: req.body.aboutMe
  })
  agent.save()
    .then(() => {
      res.status(201).json({
        message: 'new agent added'
      })
    })
    .catch((error) => {
      res.status(400).json({
        error: error,
        message: 'error here'
      })
    })
});

// delete an agent
app.delete('/agent/:id', (req, res) => {
  const id = req.params.id;
  Agent.destroy({
    where: { id: id }
  }).then(num => {
    if (num === 1) {
      res.send({
        message: "Delete successful"
      });
    } else {
      res.send({
        message: `Error deleting`
      });
    }
  }).catch(

    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
});

// fetch a single agent by ID
app.get('/agents/:id', (req, res) => {
  const id = req.params.id;
  Agent.findByPk(id)
    .then(agent => {
      if (agent) {
        res.status(200).json(agent);
      } else {
        res.status(404).send({
          message: `No agent found with id=${id}.`
        });
      }
    }).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
});

// modify an agent
app.put('/agent/:id', (req, res) => {
  const id = req.params.id;
  Agent.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: "agent was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update agent with id=${id}.`
        });
      }
    }).catch(err => {
      res.status(500).send({
        message: "Error updating agent with id=" + id
      });
    });
});

module.exports = app;
