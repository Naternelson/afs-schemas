import Joi from 'joi';

export const phoneSchema = Joi.object({
	phone: Joi.string()
		.pattern(/^\+?[1-9]\d{1,14}$/)
		.required()
		.messages({
			'string.base': 'Phone number must be a string',
			'string.empty': 'Phone number cannot be empty',
			'string.pattern.base': 'Phone number must be in E.164 format',
			'any.required': 'Phone number is required',
		}),
	/** Country code of the phone number */
	countryCode: Joi.string()
		.pattern(/^[0-9]{1,4}$/)
		.required()
		.messages({
			'string.base': 'Country code must be a string',
			'string.empty': 'Country code cannot be empty',
			'string.pattern.base': 'Country code must be a number between 1 and 4 digits',
			'any.required': 'Country code is required',
		}),
	type: Joi.string().valid('mobile', 'home', 'work').required().messages({
		'any.only': 'Phone type must be one of [mobile, home, work]',
		'any.required': 'Phone type is required',
	}),
	primary: Joi.boolean().optional().messages({
		'boolean.base': 'Primary must be a boolean',
	}),
});
