import { type NextRequest, NextResponse } from "next/server"

const movies = [
  {
    id: 1,
    title: "Avengers: Endgame",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "Hành Động",
    duration: 181,
    rating: 8.4,
    releaseDate: "2024-04-26",
    description:
      "Sau những sự kiện tàn khốc của Infinity War, vũ trụ đang trong tình trạng hỗn loạn. Với sự giúp đỡ của các đồng minh còn lại, các Avengers phải tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục lại trật tự của vũ trụ.",
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
    trailer: "https://youtube.com/watch?v=TcMBFSGVi1c",
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "Hành Động",
    duration: 148,
    rating: 8.2,
    releaseDate: "2024-12-17",
    description:
      "Peter Parker phải đối mặt với hậu quả khi danh tính Spider-Man của anh bị tiết lộ. Khi anh nhờ Doctor Strange giúp đỡ, phép thuật trở nên nguy hiểm và buộc Parker phải khám phá ý nghĩa thực sự của việc trở thành Spider-Man.",
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"],
    trailer: "https://youtube.com/watch?v=JfVOs4VSpmA",
  },
]

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = Number.parseInt(params.id)
  const movie = movies.find((m) => m.id === id)

  if (!movie) {
    return NextResponse.json({ error: "Movie not found" }, { status: 404 })
  }

  return NextResponse.json(movie)
}
