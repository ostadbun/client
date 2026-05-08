


const data = {

    "id": "22",
    "name": "دانشگاه صنعتی شریف",
    "name_english": "",
    "city": "تهران",
    "category": "دولتی",
    "image_url": "https://picsum.photos/seed/sharif/300/200",
    "description": "مرکز ممتاز آموزش مهندسی و علوم پایه در ایران",
    "description_english": "",
    "registered_by": "",
    "status": ""

}



export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = await params

  return (
    <div>My Post: {slug}</div>
  )
}