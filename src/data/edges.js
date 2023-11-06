export const edges = [
  {
    source: 'president_authority',
    label: 'vested by',
    target: 'us_constitution_laws',
    id: '06caf460-fdd3-4c81-9a16-e9c32488f7f2',
    start_phrase: 'By the authority vested in me as President by',
    end_phrase: 'the Constitution and the laws of the United States of America',
    size: 3
  },
  {
    source: 'ai',
    label: 'has',
    target: 'purpose',
    id: '52393598-04d7-4709-ba55-1a37d0f1fd4f',
    start_phrase: 'Section 1.  Purpose.  Artificial intelligence',
    end_phrase: '(AI) holds extraordinary potential for both promise and peril',
    size: 3
  },
  {
    source: 'purpose',
    label: 'includes',
    target: 'risks',
    id: '2c758a46-32e1-4d58-af57-26d52f971d61',
    start_phrase: 'At the same time, irresponsible use could',
    end_phrase: 'exacerbate societal harms such as fraud, discrimination, bias, and disinformation',
    size: 3
  },
  {
    source: 'purpose',
    label: 'includes',
    target: 'benefits',
    id: '5f93d34c-c29a-469e-8d5d-52b67a5251a4',
    start_phrase: 'Responsible AI use has the potential to help solve urgent',
    end_phrase: 'challenges while making our world more prosperous, productive, innovative, and secure',
    size: 3
  },
  {
    source: 'administration',
    label: 'prioritizes',
    target: 'policy_principles',
    id: 'ee7aaafc-3a17-4509-bd7d-48de41a906ba',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'informed by',
    target: 'society_sectors',
    id: 'ec8572c8-ee66-4669-b226-4438a1a71c3e',
    size: 3
  },
  {
    source: 'federal_government',
    label: 'coordinates',
    target: 'administration',
    id: 'eab58b8b-8af6-4571-bab9-c1aef315f0ed',
    size: 3
  },
  {
    source: 'foreign_person_verification',
    label: 'involves',
    target: 'secretary_of_commerce',
    id: '518277e2-5973-4826-9f9c-ca993ce4999b',
    size: 3
  },
  {
    source: 'ai_safety_security_board',
    label: 'advises',
    target: 'secretary_of_homeland_security',
    id: '1312a16b-5665-4600-833d-28bdb351ef04',
    size: 3
  },
  {
    source: 'cbrn_threats',
    label: 'evaluated by',
    target: 'secretary_of_homeland_security',
    id: 'b0eafe7c-114c-47c6-b144-2a55e8ad20db',
    size: 3
  },
  {
    source: 'synthetic_content_management',
    label: 'report by',
    target: 'secretary_of_commerce',
    id: '8caf14c8-3b9d-4074-b7e9-303298312783',
    size: 3
  },
  {
    source: 'dual_use_models',
    label: 'report on',
    target: 'secretary_of_commerce',
    id: 'fa804b7a-8969-4eea-b154-5f70fc24ea21',
    size: 3
  },
  {
    source: 'federal_data_security',
    label: 'guidelines by',
    target: 'chief_data_officer_council',
    id: '44a85581-5587-43aa-acf0-8e3f90f14ae7',
    size: 3
  },
  {
    source: 'talent_attraction',
    label: 'streamlined by',
    target: 'secretary_of_state',
    id: 'c5d5b6e4-4261-409d-9ee0-a938319806ce',
    size: 3
  },
  {
    source: 'innovation_promotion',
    label: 'pilot program by',
    target: 'director_of_nsf',
    id: 'ec185e57-3521-41f9-82c6-a43571efe07f',
    size: 3
  },
  {
    source: 'federal_government',
    label: 'addresses',
    target: 'foreign_person_verification',
    id: '41cf4473-ddc0-47cb-bb4e-43bab4c61fb6',
    size: 3
  },
  {
    source: 'federal_government',
    label: 'establishes',
    target: 'ai_safety_security_board',
    id: 'ab25a5a3-86ea-44da-9206-b0ddecec2220',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'guide',
    target: 'cbrn_threats',
    id: '8228eaa9-0e4f-4ece-bd40-d11db35cabf3',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'guide',
    target: 'synthetic_content_management',
    id: '9e7ccd7c-edfc-4d76-acd7-1a2023ecc435',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'guide',
    target: 'dual_use_models',
    id: '1e012fc8-4f27-4213-b75e-f7d07bc7e0da',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'guide',
    target: 'federal_data_security',
    id: '01929ace-5e7f-434a-bceb-d3d29a2da31e',
    size: 3
  },
  {
    source: 'federal_government',
    label: 'implements',
    target: 'talent_attraction',
    id: '9682cb4a-d66d-428e-959a-7075714b8b08',
    size: 3
  },
  {
    source: 'federal_government',
    label: 'supports',
    target: 'innovation_promotion',
    id: '015ff783-8fea-43b4-a7c4-403eac77f6b4',
    size: 3
  },
  {
    source: 'uspto_director',
    label: 'publishes',
    target: 'ai_inventorship_ip',
    id: 'fa319cdc-28a6-4252-bd04-68525263c188',
    size: 3
  },
  {
    source: 'secretary_of_homeland_security',
    label: 'develops',
    target: 'ai_ip_enforcement',
    id: 'ee024c7c-8bcc-4606-93c7-bb7922abefdf',
    size: 3
  },
  {
    source: 'secretary_of_hhs',
    label: 'prioritizes',
    target: 'healthcare_ai_innovation',
    id: '1afa473e-6ccc-42a9-bf80-e703132c90d0',
    size: 3
  },
  {
    source: 'secretary_of_veterans_affairs',
    label: 'hosts',
    target: 'veterans_healthcare_ai',
    id: '2ddd603d-426c-4f48-bfe5-6604b8413ee6',
    size: 3
  },
  {
    source: 'secretary_of_energy',
    label: 'issues',
    target: 'ai_climate_change',
    id: 'eda46da7-1785-4702-a16f-62c582ba3e0d',
    size: 3
  },
  {
    source: 'president_council_science_tech',
    label: 'submits report on',
    target: 'ai_scientific_research',
    id: 'd169141e-3ccb-4a61-9302-bf4ba7bff33a',
    size: 3
  },
  {
    source: 'federal_agencies',
    label: 'promote',
    target: 'ai_competition',
    id: '262d19e9-7256-43d8-9628-b0484c6718aa',
    size: 3
  },
  {
    source: 'director_of_nsf',
    label: 'prioritizes',
    target: 'ai_workforce',
    id: 'e8529c10-e06f-41b4-8c9e-8f43bae79447',
    size: 3
  },
  {
    source: 'federal_agencies',
    label: 'enforce',
    target: 'ai_equity_civil_rights',
    id: 'a7670a33-bb9a-4b11-b3f5-857c0bad60c8',
    size: 3
  },
  {
    source: 'innovation_promotion',
    label: 'guided by',
    target: 'uspto_director',
    id: '4009c0b8-b8f1-4ec0-b4c8-36027ff932fe',
    size: 3
  },
  {
    source: 'federal_data_security',
    label: 'supported by',
    target: 'ai_ip_enforcement',
    id: '161a00a5-e5df-4f2b-9e78-215fd8af8afa',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'include',
    target: 'healthcare_ai_innovation',
    id: 'd8bf0ad3-a551-48a7-bdf4-487e668281af',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'include',
    target: 'veterans_healthcare_ai',
    id: '7101e3a1-84e8-479a-8f36-6f7c9309ba8b',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'address',
    target: 'ai_climate_change',
    id: '7bde8b66-df43-4b3c-b730-556d2248b44d',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'consider',
    target: 'ai_scientific_research',
    id: '9368b89b-182d-4ea8-a7ef-b90c4a69b631',
    size: 3
  },
  {
    source: 'federal_government',
    label: 'encourages',
    target: 'ai_competition',
    id: 'dd8d1e47-e6a0-4fdb-923a-6846c11b20c8',
    size: 3
  },
  {
    source: 'administration',
    label: 'supports',
    target: 'ai_workforce',
    id: '45af2c59-3c40-496e-b7f9-13e59a161f45',
    size: 3
  },
  {
    source: 'administration',
    label: 'advances',
    target: 'ai_equity_civil_rights',
    id: 'a18de67e-dcf3-4fa8-952f-efc6f614d85d',
    size: 3
  },
  {
    source: 'secretary_of_hud',
    label: 'issues guidance on',
    target: 'ai_real_estate',
    id: '885c041b-2efa-4405-b0af-5d6b0967c0e6',
    size: 3
  },
  {
    source: 'architectural_transportation_barriers',
    label: 'provides technical assistance on',
    target: 'disability_ai_access',
    id: '90d61494-7030-4b71-9253-da798741e486',
    size: 3
  },
  {
    source: 'independent_regulatory_agencies',
    label: 'protect consumers from',
    target: 'consumer_protection_ai',
    id: 'b0e9171a-89ee-4f7d-aca2-169901e4064a',
    size: 3
  },
  {
    source: 'secretary_of_hhs',
    label: 'establishes',
    target: 'healthcare_ai_taskforce',
    id: '5551c31a-a7c0-4a48-b8c9-8a0a238422a2',
    size: 3
  },
  {
    source: 'secretary_of_transportation',
    label: 'assesses AI use in',
    target: 'ai_in_transportation',
    id: '769a2991-c366-4df0-bdce-b82399ce587c',
    size: 3
  },
  {
    source: 'secretary_of_education',
    label: 'develops resources for',
    target: 'education_ai_deployment',
    id: '6d58bf8e-bebe-4d55-9f38-c22252ff853b',
    size: 3
  },
  {
    source: 'director_of_omb',
    label: 'mitigates privacy risks in',
    target: 'privacy_protection_ai',
    id: '96e76d3d-5a8c-4008-9357-895ffb55b5c4',
    size: 3
  },
  {
    source: 'director_of_omb',
    label: 'coordinates',
    target: 'federal_ai_management',
    id: 'ea07cbd9-0f54-4222-b3f5-fe206416dadb',
    size: 3
  },
  {
    source: 'ai_equity_civil_rights',
    label: 'informs',
    target: 'ai_real_estate',
    id: 'd8c7beb3-5029-40bf-b13f-1dcc903259dd',
    size: 3
  },
  {
    source: 'ai_equity_civil_rights',
    label: 'informs',
    target: 'ai_real_estate',
    id: 'abf4bca8-bec4-4352-872c-77276932e1bc',
    size: 3
  },
  {
    source: 'ai_equity_civil_rights',
    label: 'informs',
    target: 'disability_ai_access',
    id: '7a29bd01-9945-4674-848d-b91a24c7fbe2',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'enforced by',
    target: 'consumer_protection_ai',
    id: '68fd8d1b-da6f-401d-a303-c7f58846e080',
    size: 3
  },
  {
    source: 'healthcare_ai_innovation',
    label: 'supported by',
    target: 'healthcare_ai_taskforce',
    id: 'c7bbfaa4-2e77-4f16-9d9d-6c3303ced82c',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'guide',
    target: 'ai_in_transportation',
    id: 'b1bfe1be-4408-4e70-8b2c-ecbda3f02f77',
    size: 3
  },
  {
    source: 'policy_principles',
    label: 'guide',
    target: 'education_ai_deployment',
    id: '96385dd4-8187-4fad-bdfb-f2dd376603ad',
    size: 3
  },
  {
    source: 'federal_data_security',
    label: 'enhanced by',
    target: 'privacy_protection_ai',
    id: '28bd9e92-9263-4424-b021-9e6a13ffe34e',
    size: 3
  },
  {
    source: 'federal_government',
    label: 'implements',
    target: 'federal_ai_management',
    id: 'bbd46978-5a5e-4a4c-a762-efb414711faa',
    size: 3
  },
  {
    source: 'secretary_of_commerce',
    label: 'develops support tools for',
    target: 'ai_guidance_implementation',
    id: '3f236198-a22a-4eab-a07f-5751f671c2f5',
    size: 3
  },
  {
    source: 'director_of_omb',
    label: 'establishes',
    target: 'ai_transparency',
    id: 'e8af7eb4-700f-4a1f-a955-163481e2e157',
    size: 3
  },
  {
    source: 'federal_agencies',
    label: 'facilitate',
    target: 'generative_ai_use',
    id: 'a2186faf-3e61-42b1-8461-39269756c7bc',
    size: 3
  },
  {
    source: 'technology_modernization_board',
    label: 'prioritizes',
    target: 'ai_investment',
    id: '68e12fb0-55da-44a1-9ef8-3a47e14d2506',
    size: 3
  },
  {
    source: 'administrator_of_general_services',
    label: 'facilitates',
    target: 'ai_acquisition',
    id: '471ff471-ce20-4033-bcfb-ba9c23546453',
    size: 3
  },
  {
    source: 'director_of_ostp',
    label: 'identifies',
    target: 'ai_talent_surge',
    id: 'df6ea240-45c8-44f8-8425-e1c72a09a75f',
    size: 3
  },
  {
    source: 'secretary_of_state',
    label: 'leads',
    target: 'ai_leadership_abroad',
    id: 'd7d53ac9-fd61-4389-9856-cbf15bb6e1e4',
    size: 3
  },
  {
    source: 'assistant_president_deputy_chief_staff_policy',
    label: 'chairs',
    target: 'white_house_ai_council',
    id: '21e41cbf-36dc-4ce2-8330-f64f3c614a2b',
    size: 3
  }
];
