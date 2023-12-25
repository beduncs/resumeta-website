export interface User {
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
}

export interface Location {
  name: string;
  address?: string;
  city?: string;
  state?: string;
}

export interface Activity {
  _id?: string;
  description: string;
}

export interface Employment {
  _id?: string;
  title: string;
  location: Location;
  start_date?: Date;
  end_date?: Date;
  activities?: Activity[];
}

export interface Education {
  _id?: string;
  degree: string;
  major: string;
  institution: Location;
  start_date?: Date;
  end_date?: Date;
  minor?: string;
  gpa?: number;
  activities?: Activity[];
}

export interface ResumeDocument {
  _id: string;
  name: string;
  user: User;
  employment?: Employment[];
  education?: Education[];
}

export interface Resume {
  name: string;
  user: User;
  employment?: Employment[];
  education?: Education[];
}
