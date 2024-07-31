import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: string;
  name: string;
  email: string;
  role: string;
  verified: boolean;
  status: string;
  mutate?: () => void;
};

export type Booking = {
  id: string;
  name: string;
  email: string;
  note: string;
  start: string;
  end: string;
  link: string;
  status: string;
  mutate?: () => void;
};

export type Feedback = {
  id: string;
  name: string;
  email: string;
  date: string;
  subject: string;
  message: string;
  reply: { message: string; date: Date }[];
  mutate?: () => void;
};

export type SubdaoRequest = {
  id: string;
  name: string;
  email: string;
  location: string;
  phone: string;
  bio: string;
  subdaoLocation: string;
  deployType: string;
  subdaoSize: string;
  helpRequest: string;
  discord: string;
  linkedin: string;
  date: string;
  mutate?: () => void;
};

export type ProposalRequest = {
  id: string;
  name: string;
  email: string;
  title: string;
  summary: string;
  content: string;
  actions: any;
  status: string;
  link: string;
  date: string;
  mutate?: () => void;
};

export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};
