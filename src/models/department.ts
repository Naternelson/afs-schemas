import Joi from 'joi';

const memberSchema = Joi.object({
	displayName: Joi.string().required().messages({
		'string.base': 'Display name must be a string',
		'any.required': 'Display name is required',
	}),
	uid: Joi.string().required().messages({
		'string.base': 'UID must be a string',
		'any.required': 'UID is required',
	}),
	role: Joi.string().required().messages({
		'string.base': 'Role must be a string',
		'any.required': 'Role is required',
	}),
	photoUrl: Joi.string().uri().optional().messages({
		'string.base': 'Photo URL must be a string',
		'string.uri': 'Photo URL must be a valid URI',
	}),
	startDate: Joi.date().required().messages({
		'date.base': 'Start date must be a valid date',
		'any.required': 'Start date is required',
	}),
	endDate: Joi.date().greater(Joi.ref('startDate')).optional().messages({
		'date.base': 'End date must be a valid date',
		'date.greater': 'End date must be later than the start date',
	}),
});

export const departmentSchema = Joi.object({
	organization: Joi.string().required().messages({
		'string.base': 'Organization must be a string',
		'string.empty': 'Organization cannot be empty',
		'any.required': 'Organization is required',
	}),
	supervisor: memberSchema.required().messages({
		'object.base': 'Supervisor must be an object',
		'any.required': 'Supervisor is required',
	}),
	name: Joi.string().required().messages({
		'string.base': 'Name must be a string',
		'string.empty': 'Name cannot be empty',
		'any.required': 'Name is required',
	}),
	description: Joi.string().required().messages({
		'string.base': 'Description must be a string',
		'string.empty': 'Description cannot be empty',
		'any.required': 'Description is required',
	}),
	tags: Joi.array().items(Joi.string()).optional().messages({
		'array.base': 'Tags must be an array',
	}),
	parentDepartments: Joi.array().items(Joi.string()).optional().default([]).messages({
		'array.base': 'Parent departments must be an array',
	}),
	members: Joi.array().items(memberSchema).required().min(1).messages({
		'array.base': 'Members must be an array',
		'array.min': 'There must be at least one member in the department',
		'any.required': 'Members are required',
	}),
	childDepartments: Joi.array().items(Joi.string()).optional().default([]).messages({
		'array.base': 'Child departments must be an array',
	}),
});
