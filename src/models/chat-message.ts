import Joi from 'joi';

const senderSchema = Joi.object({
	displayName: Joi.string().required().messages({
		'string.base': 'Display name must be a string',
		'any.required': 'Display name is required',
	}),
	role: Joi.string().required().messages({
		'string.base': 'Role must be a string',
		'any.required': 'Role is required',
	}),
	photoUrl: Joi.string().uri().optional().messages({
		'string.base': 'Photo URL must be a string',
		'string.uri': 'Photo URL must be a valid URI',
	}),
	uid: Joi.string().required().messages({
		'string.base': 'UID must be a string',
		'any.required': 'UID is required',
	}),
	department: Joi.string().required().messages({
		'string.base': 'Department must be a string',
		'any.required': 'Department is required',
	}),
});

export const chatMessageSchema = Joi.object({
	tags: Joi.array().items(Joi.string()).optional().messages({
		'array.base': 'Tags must be an array',
	}),
	sender: senderSchema.required().messages({
		'object.base': 'Sender must be an object',
		'any.required': 'Sender is required',
	}),
	chatRoom: Joi.string().required().messages({
		'string.base': 'Chat room must be a string',
		'any.required': 'Chat room is required',
	}),
	message: Joi.string().required().messages({
		'string.base': 'Message must be a string',
		'any.required': 'Message is required',
	}),

	// The original message is the message that was sent before it was edited. This field is used to store the original message reference when a message is edited.
	originalMessage: Joi.string().optional().messages({
		'string.base': 'Original message must be a string',
	}),
	deleted: Joi.boolean().optional().default(false).messages({
		'boolean.base': 'Deleted must be a boolean',
	}),
	images: Joi.array().items(Joi.string().uri()).optional().default([]).messages({
		'array.base': 'Images must be an array',
		'string.uri': 'Images must be a valid URI',
	}),
	// The timestamp is the time at which the message was sent.
	timestamp: Joi.date().required().messages({
		'date.base': 'Timestamp must be a date',
		'any.required': 'Timestamp is required',
	}),
});
