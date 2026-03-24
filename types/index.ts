export interface Social {
  name: string
  url: string
  className: string
}

export interface Profile {
  name: string
  url: string
  className: string
}

export interface Address {
  city: string
  state: string
}

export interface MainData {
  name: string
  occupation: string
  description: string
  image: string
  bio: string
  contactmessage: string
  email: string
  address: Address
  website: string
  resumedownload: string
  social: Social[]
  profiles: Profile[]
}

export interface Education {
  school: string
  degree: string
  graduated: string
}

export interface Work {
  company: string
  title: string
  years: string
}

export interface Skill {
  name: string
  level: string
}

export interface ResumeData {
  skillmessage: string
  education: Education[]
  work: Work[]
  skills: Skill[]
}

export interface Project {
  // Define if fields exist later
  title?: string
  description?: string
  url?: string
  image?: string
}

export interface PortfolioData {
  projects: Project[]
}

export interface Testimonial {
  text?: string
  author?: string
}

export interface TestimonialsData {
  testimonials: Testimonial[]
}

export interface FullResumeData {
  main: MainData
  resume: ResumeData
  portfolio: PortfolioData
  testimonials: TestimonialsData
}
