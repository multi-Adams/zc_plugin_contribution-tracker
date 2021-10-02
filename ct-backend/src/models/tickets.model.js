// Package Modules
import Joi from 'joi'

// Ticket Schema
const ticket_schema = Joi.object({
  // ticket title
  title: Joi.string().trim().required().label('title'),

  // Ticket Owner
  owner_id: Joi.string().trim().required().label('owner_id'),

  //ticket description
  description: Joi.string().trim().required().label('description'),

  //commit url
  commit_url: Joi.string().trim().uri().label('commit_url'),

  //test url
  test_url: Joi.string().trim().uri().label('test_url'),

  // ticket status
  status: Joi.string().trim().default('requested').valid('requested', 'completed', 'archived').allow(null).label('status'), // requested/created = 0,  completed = 1, archived = 2

  //vote count
  upvote: Joi.number().default(0).label('upvote').allow(null),
  downvote: Joi.number().default(0).label('downvote').allow(null),
  //time created
  created_at: Joi.date().default(Date.now).allow(null).label('created_at'),
  updated_at: Joi.date().allow(null).label('updated_at'),
});

export default ticket_schema
