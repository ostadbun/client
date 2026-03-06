import { api } from "../api/base";
import { PendingSubmissionsResponse } from "../entity/entity";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Clock, User, University as UniversityIcon, BookOpen, GraduationCap } from "lucide-react";

export default async function PendingPage() {


  let data: PendingSubmissionsResponse | null = null;
  let error: string | null = null;

  try {
    const response = await api.get<PendingSubmissionsResponse>("/pending");

    // Validate the response
    // if (!response || !response.data) {
    //   throw new Error("پاسخ نامعتبر از سرور");
    // }

    data = response.data;
  } catch (err) {
    console.log("خطا در دریافت داده‌های در انتظار تأیید:", err);
    if (err instanceof Error) {
      console.log("جزئیات خطا:", err.message, err.stack);
    }
    error = "متأسفانه در بارگذاری داده‌ها مشکلی پیش آمد. لطفاً بعداً امتحان کنید.";
  }

  if (error) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <div className="text-destructive text-lg font-medium">{error}</div>
      </div>
    );
  }

  const hasAnyData =
    data &&
    (data?.lesson?.length > 0 ||
      data?.professor?.length > 0 ||
      data?.university?.length > 0 ||
      data?.major?.length > 0);

  if (!hasAnyData) {
    return (
      <div className="container mx-auto py-16 px-4 text-center">
        <div className="text-muted-foreground text-lg">
          فعلاً هیچ موردی در انتظار تأیید نیست.
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold tracking-tight">
          موارد در انتظار تأیید
        </h1>
        <p className="mt-2 text-muted-foreground">
          آیتم‌هایی که توسط کاربران ارسال شده و هنوز بررسی نشده‌اند
        </p>
      </div>

      {/* درس‌ها */}
      {data?.lesson?.length ? (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">درس‌ها</h2>
            <Badge variant="secondary">{data?.lesson?.length}</Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.lesson?.map((lesson) => (
              <Card key={lesson.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="line-clamp-2">{lesson.name}</CardTitle>
                  {lesson.name_english && (
                    <CardDescription className="text-sm">
                      {lesson.name_english}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-3 pb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">سختی:</span>
                    <Badge variant="outline">{lesson.difficulty}/5</Badge>
                  </div>
                  {lesson.description && (
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {lesson.description}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="bg-muted/40 px-6 py-3 text-xs text-muted-foreground flex justify-between">
                  <div className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    <span>کاربر {lesson.submitted_by}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>
                      {new Date(lesson.submitted_at).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {/* اساتید */}
      {data?.professor?.length ? (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">اساتید</h2>
            <Badge variant="secondary">{data?.professor?.length}</Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.professor.map((prof) => (
              <Card key={prof.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle>{prof.name}</CardTitle>
                  {prof.name_english && (
                    <CardDescription>{prof.name_english}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  {prof.image_url && (
                    <div className="flex justify-center">
                      <img
                        src={prof.image_url}
                        alt={prof.name}
                        className="h-28 w-28 rounded-full object-cover border-2 border-background shadow-sm"
                      />
                    </div>
                  )}
                  {prof.description_english && (
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {prof.description_english}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="bg-muted/40 px-6 py-3 text-xs text-muted-foreground flex justify-between">
                  <div className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    <span>کاربر {prof.submitted_by}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>
                      {new Date(prof.submitted_at).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {/* دانشگاه‌ها */}
      {data?.university?.length ? (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <UniversityIcon className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">دانشگاه‌ها</h2>
            <Badge variant="secondary">{data?.university?.length}</Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data?.university?.map((uni) => (
              <Card key={uni.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle className="line-clamp-2">{uni.name}</CardTitle>
                  {uni.name_english && (
                    <CardDescription>{uni.name_english}</CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-3">
                  {uni.image_url && (
                    <img
                      src={uni.image_url}
                      alt={uni.name}
                      className="w-full h-40 object-cover rounded-md"
                    />
                  )}
                  {uni.city && (
                    <div className="text-sm">
                      <span className="text-muted-foreground">شهر: </span>
                      {uni.city}
                    </div>
                  )}
                  {uni.description && (
                    <p className="text-sm text-muted-foreground line-clamp-3">
                      {uni.description}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="bg-muted/40 px-6 py-3 text-xs text-muted-foreground flex justify-between">
                  <div className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    <span>کاربر {uni.submitted_by}</span>
                  </div>
                  <Clock className="h-3.5 w-3.5" />
                  <span>
                    {new Date(uni.submitted_at).toLocaleDateString("fa-IR")}
                  </span>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      {/* رشته‌ها */}
      {data?.major?.length ? (
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-semibold">رشته‌ها</h2>
            <Badge variant="secondary">{data.major?.length}</Badge>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.major.map((major) => (
              <Card key={major.id} className="overflow-hidden">
                <CardHeader className="pb-3">
                  <CardTitle>{major.name}</CardTitle>
                  {major.name_english && (
                    <CardDescription>{major.name_english}</CardDescription>
                  )}
                </CardHeader>
                <CardContent>
                  {major.description_english && (
                    <p className="text-sm text-muted-foreground line-clamp-4">
                      {major.description_english}
                    </p>
                  )}
                </CardContent>
                <CardFooter className="bg-muted/40 px-6 py-3 text-xs text-muted-foreground flex justify-between">
                  <div className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    <span>کاربر {major.submitted_by}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    <span>
                      {new Date(major.submitted_at).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      ) : null}

      <Separator className="my-12" />

      <p className="text-center text-sm text-muted-foreground">
        این صفحه فقط موارد با وضعیت "pending" را نمایش می‌دهد • پروژه استادبان
      </p>
    </div>
  );
}