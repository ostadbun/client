import { NextRequest, NextResponse } from "next/server";

export async function GET() {

    const user = {

        major, lesson, professor, university

    }

    return NextResponse.json(user);
}




const major = {
    "id": "3",
    "name": "مهندسی کامپیوتر",
    "name_english": "softwer engineering",
    "description": "این کامپیوتر است",
    "description_english": "this is engineering"
}



const lesson = {
    "id": "30",
    "name": "ریاضیات مهندسی",
    "name_english": "riaziat mohandesi",
    "term": "3",
    "difficulty": 5,         // from 1 to 5
    "description": "ریاضیات است دیگر",
    "description_english": "this is math",
}


const professor = {
    "id": "21",
    "name": "دکتر علی رضایی",
    "name_english": "ali rezai",
    "description": "عضو هیئت علمی دانشگاه تهران با بیش از 15 سال سابقه تدریس در حوزه یادگیری ماشین و پردازش زبان طبیعی",
    "description_english": "short text",
    "education_history": [
        {
            "year": "1398",
            "field": "هوش مصنوعی",
            "degree": "دکترا",
            "university": "دانشگاه صنعتی شریف"
        },
        {
            "year": "1393",
            "field": "مهندسی کامپیوتر",
            "degree": "کارشناسی ارشد",
            "university": "دانشگاه تهران"
        }
    ],
    "image_url": "https://picsum.photos/seed/prof1/200/200",
}


const university = {
    "id": "22",
    "name": "دانشگاه صنعتی شریف",
    "name_english": "sharif",
    "city": "tehran",
    "category": "دولتی",
    "image_url": "https://picsum.photos/seed/sharif/300/200",
    "description": "مرکز ممتاز آموزش مهندسی و علوم پایه در ایران",
    "description_english": "best of all",


}