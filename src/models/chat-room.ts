import Joi from 'joi';

// Define the schema for a single user
const userSchema = Joi.object({
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

// Define the schema for the chat room
export const chatRoomSchema = Joi.object({
	tags: Joi.array().items(Joi.string()).optional().messages({
		'array.base': 'Tags must be an array',
	}),
	users: Joi.array().items(userSchema).min(2).required().messages({
		'array.base': 'Users must be an array',
		'array.min': 'There must be at least two users in the chat room',
		'any.required': 'Users are required',
	}),
	status: Joi.string().valid('active', 'inactive', 'closed').required().messages({
		'string.base': 'Status must be a string',
		'any.only': 'Status must be one of the following: active, inactive, closed',
		'any.required': 'Status is required',
	}),
    /**
     * The scope indicates the type of chat room. For example, a chat room might be setup to fix a specific issue, or to discuss a specific topic.
     */
	scope: Joi.string().required().messages({
		'string.base': 'Scope must be a string',
		'any.required': 'Scope is required',
	}),
    /**
     * The inactivity timeout is the amount of time, in days, that the chat room can remain inactive before it is automatically closed.
     */
    inactivityTimeout: Joi.number().integer().min(0).optional().messages({
        'number.base': 'Inactivity timeout must be a number',
        'number.integer': 'Inactivity timeout must be an integer',
        'number.min': 'Inactivity timeout must be greater than or equal to 0',
    }),
});
