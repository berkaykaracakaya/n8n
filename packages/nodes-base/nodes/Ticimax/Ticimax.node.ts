import type { INodeType, INodeTypeDescription, IExecuteFunctions } from 'n8n-workflow';
import { NodeConnectionType } from 'n8n-workflow';

export class Ticimax implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Ticimax',
		name: 'ticimax',
		group: ['output'],
		version: 1,
		description: 'Consume Ticimax API',
		defaults: {
			name: 'Ticimax',
		},
		icon: 'file:ticimax.svg',

		inputs: [NodeConnectionType.Main],
		outputs: [NodeConnectionType.Main],
		credentials: [
			{
				name: 'ticimaxApi',
				required: true,
			},
		],
		properties: [
			// Buraya API method'larını ve parametreleri ekleyeceksin
		],
	};

	async execute(this: IExecuteFunctions) {
		const responseData = [{ example: 'data' }];

		// Yanıtı doğru formatta döndür
		return [this.helpers.returnJsonArray(responseData)];
	}
}
