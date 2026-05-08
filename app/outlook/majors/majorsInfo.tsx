import { Separator } from "@/components/ui/separator";

const MajorsInfo = () => {
  return (
    <div className="space-y-2 mb-[3vh]">
      <h2 className="text-2xl place-self-center font-semibold">مهندسی کامپیوتر</h2>
      <p className="place-self-center  text-muted-foreground">
        جایی که هر خط کد، قدمی به سوی ساختن آینده‌ای هوشمندتر است.
      </p>
      <Separator />
      <p className="place-self-center ">
        مهندسی کامپیوتر هنری است که منطق و خلاقیت را در کنار هم قرار می‌دهد تا ایده‌ها را به فناوری‌های واقعی و تأثیرگذار تبدیل کند.
      </p>
    </div>
  )
}
export default MajorsInfo;