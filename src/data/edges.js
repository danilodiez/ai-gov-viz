export const edges = [
  {
    source: "president_authority",
    label: "vested by",
    target: "us_constitution_laws"
  },
  { source: "ai", label: "has", target: "purpose" },
  { source: "purpose", label: "includes", target: "risks" },
  { source: "purpose", label: "includes", target: "benefits" },
  {
    source: "administration",
    label: "prioritizes",
    target: "policy_principles"
  },
  {
    source: "policy_principles",
    label: "informed by",
    target: "society_sectors"
  },
  {
    source: "federal_government",
    label: "coordinates",
    target: "administration"
  },
  {
    source: "foreign_person_verification",
    label: "involves",
    target: "secretary_of_commerce"
  },
  {
    source: "ai_safety_security_board",
    label: "advises",
    target: "secretary_of_homeland_security"
  },
  {
    source: "cbrn_threats",
    label: "evaluated by",
    target: "secretary_of_homeland_security"
  },
  {
    source: "synthetic_content_management",
    label: "report by",
    target: "secretary_of_commerce"
  },
  {
    source: "dual_use_models",
    label: "report on",
    target: "secretary_of_commerce"
  },
  {
    source: "federal_data_security",
    label: "guidelines by",
    target: "chief_data_officer_council"
  },
  {
    source: "talent_attraction",
    label: "streamlined by",
    target: "secretary_of_state"
  },
  {
    source: "innovation_promotion",
    label: "pilot program by",
    target: "director_of_nsf"
  },
  {
    source: "federal_government",
    label: "addresses",
    target: "foreign_person_verification"
  },
  {
    source: "federal_government",
    label: "establishes",
    target: "ai_safety_security_board"
  },
  { source: "policy_principles", label: "guide", target: "cbrn_threats" },
  {
    source: "policy_principles",
    label: "guide",
    target: "synthetic_content_management"
  },
  {
    source: "policy_principles",
    label: "guide",
    target: "dual_use_models"
  },
  {
    source: "policy_principles",
    label: "guide",
    target: "federal_data_security"
  },
  {
    source: "federal_government",
    label: "implements",
    target: "talent_attraction"
  },
  {
    source: "federal_government",
    label: "supports",
    target: "innovation_promotion"
  },
  {
    source: "uspto_director",
    label: "publishes",
    target: "ai_inventorship_ip"
  },
  {
    source: "secretary_of_homeland_security",
    label: "develops",
    target: "ai_ip_enforcement"
  },
  {
    source: "secretary_of_hhs",
    label: "prioritizes",
    target: "healthcare_ai_innovation"
  },
  {
    source: "secretary_of_veterans_affairs",
    label: "hosts",
    target: "veterans_healthcare_ai"
  },
  {
    source: "secretary_of_energy",
    label: "issues",
    target: "ai_climate_change"
  },
  {
    source: "president_council_science_tech",
    label: "submits report on",
    target: "ai_scientific_research"
  },
  {
    source: "federal_agencies",
    label: "promote",
    target: "ai_competition"
  },
  {
    source: "director_of_nsf",
    label: "prioritizes",
    target: "ai_workforce"
  },
  {
    source: "federal_agencies",
    label: "enforce",
    target: "ai_equity_civil_rights"
  },
  {
    source: "innovation_promotion",
    label: "guided by",
    target: "uspto_director"
  },
  {
    source: "federal_data_security",
    label: "supported by",
    target: "ai_ip_enforcement"
  },
  {
    source: "policy_principles",
    label: "include",
    target: "healthcare_ai_innovation"
  },
  {
    source: "policy_principles",
    label: "include",
    target: "veterans_healthcare_ai"
  },
  {
    source: "policy_principles",
    label: "address",
    target: "ai_climate_change"
  },
  {
    source: "policy_principles",
    label: "consider",
    target: "ai_scientific_research"
  },
  {
    source: "federal_government",
    label: "encourages",
    target: "ai_competition"
  },
  { source: "administration", label: "supports", target: "ai_workforce" },
  {
    source: "administration",
    label: "advances",
    target: "ai_equity_civil_rights"
  },
  {
    source: "secretary_of_hud",
    label: "issues guidance on",
    target: "ai_real_estate"
  },
  {
    source: "architectural_transportation_barriers",
    label: "provides technical assistance on",
    target: "disability_ai_access"
  },
  {
    source: "independent_regulatory_agencies",
    label: "protect consumers from",
    target: "consumer_protection_ai"
  },
  {
    source: "secretary_of_hhs",
    label: "establishes",
    target: "healthcare_ai_taskforce"
  },
  {
    source: "secretary_of_transportation",
    label: "assesses AI use in",
    target: "ai_in_transportation"
  },
  {
    source: "secretary_of_education",
    label: "develops resources for",
    target: "education_ai_deployment"
  },
  {
    source: "director_of_omb",
    label: "mitigates privacy risks in",
    target: "privacy_protection_ai"
  },
  {
    source: "director_of_omb",
    label: "coordinates",
    target: "federal_ai_management"
  },
  {
    source: "ai_equity_civil_rights",
    label: "informs",
    target: "ai_real_estate"
  },
  {
    source: "ai_equity_civil_rights",
    label: "informs",
    target: "ai_real_estate"
  },
  {
    source: "ai_equity_civil_rights",
    label: "informs",
    target: "disability_ai_access"
  },
  {
    source: "policy_principles",
    label: "enforced by",
    target: "consumer_protection_ai"
  },
  {
    source: "healthcare_ai_innovation",
    label: "supported by",
    target: "healthcare_ai_taskforce"
  },
  {
    source: "policy_principles",
    label: "guide",
    target: "ai_in_transportation"
  },
  {
    source: "policy_principles",
    label: "guide",
    target: "education_ai_deployment"
  },
  {
    source: "federal_data_security",
    label: "enhanced by",
    target: "privacy_protection_ai"
  },
  {
    source: "federal_government",
    label: "implements",
    target: "federal_ai_management"
  },
  {
    source: "secretary_of_commerce",
    label: "develops support tools for",
    target: "ai_guidance_implementation"
  },
  {
    source: "director_of_omb",
    label: "establishes",
    target: "ai_transparency"
  },
  {
    source: "federal_agencies",
    label: "facilitate",
    target: "generative_ai_use"
  },
  {
    source: "technology_modernization_board",
    label: "prioritizes",
    target: "ai_investment"
  },
  {
    source: "administrator_of_general_services",
    label: "facilitates",
    target: "ai_acquisition"
  },
  {
    source: "director_of_ostp",
    label: "identifies",
    target: "ai_talent_surge"
  },
  {
    source: "secretary_of_state",
    label: "leads",
    target: "ai_leadership_abroad"
  },
  {
    source: "assistant_president_deputy_chief_staff_policy",
    label: "chairs",
    target: "white_house_ai_council"
  }
]

