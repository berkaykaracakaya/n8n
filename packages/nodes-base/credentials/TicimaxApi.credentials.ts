import type { ICredentialTestRequest, ICredentialType, INodeProperties } from 'n8n-workflow';

export class TicimaxApi implements ICredentialType {
	name = 'ticimaxApi';

	displayName = 'Ticimax API';

	documentationUrl = 'ticimax';

	properties: INodeProperties[] = [
		{
			displayName: 'Domain Name',
			name: 'domainName',
			type: 'string',
			default: '',
			placeholder: 'https://yourdomainname.com',
		},
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.domainName}}',
		},
	};
}
