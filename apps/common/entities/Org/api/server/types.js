import commonFields from '../../../common_fields';

export default `
  enum OrgStatus {
    Draft
    Queue
    Processing
    Active
    Inactive
    Closed
  }
  
  type Org {
    ${commonFields}
    nr: String
    logoUrl: String
    address: String
    zipCode: String
    city: String
    state: String
    country: String
    phone: String
    email: String
    latitude: Float
    longitude: Float
    
    type: String
    status: OrgStatus
    
    Users: [User]
    roles: [Role]
  }
  
  input OrgInput {
    _id: String!
    
    nr: String
    name: String
    shortname: String
    address: String
    zipCode: String
    city: String
    state: String
    country: String
    phone: String
    email: String
    
    latitude: Float
    longitude: Float
    
    type: String
    
    description: String
    
    roles: [String]
  }
`;
