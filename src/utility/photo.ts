import Joi from "joi";

export const photoSchema = Joi.object({
	url: Joi.string().uri().required().messages({
		'string.base': 'URL must be a string',
		'string.empty': 'URL cannot be empty',
		'string.uri': 'URL must be a valid URI',
		'any.required': 'URL is required',
	}),
	width: Joi.number().positive().required().messages({
		'number.base': 'Width must be a number',
		'number.positive': 'Width must be a positive number',
		'any.required': 'Width is required',
	}),
	height: Joi.number().positive().required().messages({
		'number.base': 'Height must be a number',
		'number.positive': 'Height must be a positive number',
		'any.required': 'Height is required',
	}),
	alt: Joi.string().optional().messages({
		'string.base': 'Alt text must be a string',
	}),
	title: Joi.string().optional().messages({
		'string.base': 'Title must be a string',
	}),
});
