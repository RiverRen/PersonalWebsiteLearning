
// education 
export type EducationItemType = {
    school: string
    major: string
    image?: string
    logo: string
    start: string
    end: string
  }
  
  
  
  export const educationList: Array<EducationItemType> = [
    {
      school: 'Peking University',
      major: 'Psychology',
      logo: 'college',
      start: '2022',
      end: 'not yet'
    },
  ]