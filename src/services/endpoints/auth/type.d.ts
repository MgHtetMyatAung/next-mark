interface loginRequest {
  email: string;
  password: string;
}

interface registerRequest {
  name: string;
  email: string;
  password: string;
}

interface authResponse {
  authToken: string;
}
