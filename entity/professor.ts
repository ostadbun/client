interface EducationItem {
    year: string;
    field: string;
    degree: string;
    university: string;
}

export interface IProfessor {
    name: string;
    name_english: string;
    description: string;
    description_english: string;
    education_history: EducationItem[];
    image_url: string;
}