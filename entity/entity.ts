// نوع پایه برای فیلدهای مشترک (اختیاری - برای DRY بودن)
interface BaseEntity {
    id: number;
    status: "pending" | "approved" | "rejected"; // می‌تونی مقادیر بیشتری اضافه کنی
    submitted_by: number;
    submitted_at: string; // ISO datetime مثل "2026-02-23T15:43:38.859424Z"
}

// دانشگاه
export interface University extends BaseEntity {
    name: string;
    name_english: string;
    description_english: string;
    city: string;
    category: string;
    image_url: string;
    description: string;
}

// درس / واحد درسی
export interface Lesson extends BaseEntity {
    name: string;
    name_english: string;
    description_english: string;
    difficulty: number;           // احتمالاً 1 تا 5 یا 1 تا 10
    description: string;
}

// استاد
export interface Professor extends BaseEntity {
    name: string;
    name_english: string;
    description_english: string;
    education_history: Record<string, string>; // مثلاً { iran: "azad", abroad: "..." }
    image_url: string;
}

// رشته تحصیلی
export interface Major extends BaseEntity {
    name: string;
    name_english: string;
    description_english: string;
}

// ساختار اصلی پاسخ API (دقیقاً همون شکل JSON شما)
export interface PendingSubmissionsResponse {
    university: University[];
    lesson: Lesson[];
    professor: Professor[];
    major: Major[];
}

// اگر فقط می‌خوای نوع کلی response رو داشته باشی (انعطاف‌پذیرتر)
interface SubmissionData {
    university: University[];
    lesson: Lesson[];
    professor: Professor[];
    major: Major[];
    // اگر بعداً بخش‌های دیگه اضافه شد (مثل faculty, department و ...) اینجا اضافه می‌شه
}





export interface Professor_educationHistory {
    universityName: string
    degree: string
    major: string
}