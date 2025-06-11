import { type NextRequest, NextResponse } from "next/server"
import type { Movie, ApiResponse, FilterOptions } from "@/types"
import { PAGINATION_DEFAULTS } from "@/lib/constants"

// Mock data - trong thực tế sẽ kết nối với database
const mockMovies: Movie[] = [
  {
    id: 1,
    title: "Avengers: Endgame",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "action",
    duration: 181,
    rating: 8.4,
    releaseDate: "2024-04-26",
    description:
      "Sau những sự kiện tàn khốc của Infinity War, vũ trụ đang trong tình trạng hỗn loạn. Với sự giúp đỡ của các đồng minh còn lại, các Avengers phải tập hợp một lần nữa để đảo ngược hành động của Thanos và khôi phục lại trật tự của vũ trụ.",
    director: "Anthony Russo, Joe Russo",
    cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson"],
    trailer: "https://youtube.com/watch?v=TcMBFSGVi1c",
    status: "showing",
    createdAt: "2024-01-01T00:00:00Z",
    updatedAt: "2024-01-01T00:00:00Z",
  },
  {
    id: 2,
    title: "Spider-Man: No Way Home",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "action",
    duration: 148,
    rating: 8.2,
    releaseDate: "2024-12-17",
    description:
      "Peter Parker phải đối mặt với hậu quả khi danh tính Spider-Man của anh bị tiết lộ. Khi anh nhờ Doctor Strange giúp đỡ, phép thuật trở nên nguy hiểm và buộc Parker phải khám phá ý nghĩa thực sự của việc trở thành Spider-Man.",
    director: "Jon Watts",
    cast: ["Tom Holland", "Zendaya", "Benedict Cumberbatch", "Jacob Batalon"],
    trailer: "https://youtube.com/watch?v=JfVOs4VSpmA",
    status: "showing",
    createdAt: "2024-01-02T00:00:00Z",
    updatedAt: "2024-01-02T00:00:00Z",
  },
  {
    id: 3,
    title: "The Batman",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "action",
    duration: 176,
    rating: 7.8,
    releaseDate: "2024-03-04",
    description:
      "Trong năm thứ hai của mình với tư cách là Batman, Bruce Wayne khám phá tham nhũng ở Gotham City và cách nó liên kết với gia đình của chính mình trong khi đối mặt với một kẻ giết người hàng loạt được gọi là Riddler.",
    director: "Matt Reeves",
    cast: ["Robert Pattinson", "Zoë Kravitz", "Paul Dano", "Jeffrey Wright"],
    trailer: "https://youtube.com/watch?v=mqqft2x_Aa4",
    status: "showing",
    createdAt: "2024-01-03T00:00:00Z",
    updatedAt: "2024-01-03T00:00:00Z",
  },
  {
    id: 4,
    title: "Top Gun: Maverick",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "action",
    duration: 130,
    rating: 8.3,
    releaseDate: "2024-05-27",
    description:
      "Sau hơn ba mười năm phục vụ với tư cách là một trong những phi công hàng đầu của Hải quân, Pete 'Maverick' Mitchell đang ở nơi anh thuộc về, thúc đẩy phong bì như một phi công thử nghiệm dũng cảm.",
    director: "Joseph Kosinski",
    cast: ["Tom Cruise", "Miles Teller", "Jennifer Connelly", "Jon Hamm"],
    trailer: "https://youtube.com/watch?v=qSqVVswa420",
    status: "showing",
    createdAt: "2024-01-04T00:00:00Z",
    updatedAt: "2024-01-04T00:00:00Z",
  },
  {
    id: 5,
    title: "Doctor Strange in the Multiverse of Madness",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "action",
    duration: 126,
    rating: 6.9,
    releaseDate: "2024-05-06",
    description:
      "Doctor Strange, với sự giúp đỡ của những đồng minh huyền bí cả cũ và mới, đi qua những thực tế thay thế đáng kinh ngạc và nguy hiểm của Multiverse để đối đầu với một kẻ thù bí ẩn mới.",
    director: "Sam Raimi",
    cast: ["Benedict Cumberbatch", "Elizabeth Olsen", "Chiwetel Ejiofor", "Benedict Wong"],
    trailer: "https://youtube.com/watch?v=aWzlQ2N6qqg",
    status: "showing",
    createdAt: "2024-01-05T00:00:00Z",
    updatedAt: "2024-01-05T00:00:00Z",
  },
  {
    id: 6,
    title: "Minions: The Rise of Gru",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "animation",
    duration: 87,
    rating: 6.5,
    releaseDate: "2024-07-01",
    description:
      "Một phần tiền truyện kể về Gru 12 tuổi và cách anh trở thành siêu ác nhân với sự giúp đỡ của những người bạn Minions trung thành.",
    director: "Kyle Balda",
    cast: ["Steve Carell", "Pierre Coffin", "Alan Arkin", "Taraji P. Henson"],
    trailer: "https://youtube.com/watch?v=6DxjJzmYsXo",
    status: "showing",
    createdAt: "2024-01-06T00:00:00Z",
    updatedAt: "2024-01-06T00:00:00Z",
  },
  {
    id: 7,
    title: "Thor: Love and Thunder",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "action",
    duration: 119,
    rating: 6.2,
    releaseDate: "2024-07-08",
    description:
      "Thor bắt tay vào một cuộc hành trình không giống bất kỳ điều gì anh từng đối mặt - một nhiệm vụ tự khám phá bản thân. Nhưng những nỗ lực của anh để nghỉ hưu bị gián đoạn bởi một kẻ giết thần thiên hà được gọi là Gorr the God Butcher.",
    director: "Taika Waititi",
    cast: ["Chris Hemsworth", "Natalie Portman", "Christian Bale", "Tessa Thompson"],
    trailer: "https://youtube.com/watch?v=_Z3QKkl1WyM",
    status: "showing",
    createdAt: "2024-01-07T00:00:00Z",
    updatedAt: "2024-01-07T00:00:00Z",
  },
  {
    id: 8,
    title: "Black Panther: Wakanda Forever",
    poster: "/placeholder.svg?height=600&width=400",
    genre: "action",
    duration: 161,
    rating: 6.7,
    releaseDate: "2024-11-11",
    description:
      "Nữ hoàng Ramonda, Shuri, M'Baku, Okoye và Dora Milaje chiến đấu để bảo vệ quốc gia của họ khỏi các thế lực can thiệp sau cái chết của Vua T'Challa.",
    director: "Ryan Coogler",
    cast: ["Letitia Wright", "Angela Bassett", "Tenoch Huerta", "Danai Gurira"],
    trailer: "https://youtube.com/watch?v=_Z3QKkl1WyM",
    status: "showing",
    createdAt: "2024-01-08T00:00:00Z",
    updatedAt: "2024-01-08T00:00:00Z",
  },
]

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)

    const filters: FilterOptions = {
      search: searchParams.get("search") || undefined,
      genre: searchParams.get("genre") || undefined,
      status: searchParams.get("status") || undefined,
      sortBy: searchParams.get("sortBy") || "createdAt",
      sortOrder: (searchParams.get("sortOrder") as "asc" | "desc") || "desc",
      page: Number.parseInt(searchParams.get("page") || PAGINATION_DEFAULTS.PAGE.toString()),
      limit: Math.min(
        Number.parseInt(searchParams.get("limit") || PAGINATION_DEFAULTS.LIMIT.toString()),
        PAGINATION_DEFAULTS.MAX_LIMIT,
      ),
    }

    // Áp dụng filters
    let filteredMovies = mockMovies

    if (filters.search) {
      filteredMovies = filteredMovies.filter(
        (movie) =>
          movie.title.toLowerCase().includes(filters.search!.toLowerCase()) ||
          movie.description.toLowerCase().includes(filters.search!.toLowerCase()),
      )
    }

    if (filters.genre) {
      filteredMovies = filteredMovies.filter((movie) => movie.genre === filters.genre)
    }

    if (filters.status) {
      filteredMovies = filteredMovies.filter((movie) => movie.status === filters.status)
    }

    // Sắp xếp
    filteredMovies.sort((a, b) => {
      const aValue = a[filters.sortBy as keyof Movie] as any
      const bValue = b[filters.sortBy as keyof Movie] as any

      if (filters.sortOrder === "asc") {
        return aValue > bValue ? 1 : -1
      } else {
        return aValue < bValue ? 1 : -1
      }
    })

    // Phân trang
    const total = filteredMovies.length
    const totalPages = Math.ceil(total / filters.limit!)
    const startIndex = (filters.page! - 1) * filters.limit!
    const endIndex = startIndex + filters.limit!
    const paginatedMovies = filteredMovies.slice(startIndex, endIndex)

    const response: ApiResponse<Movie[]> = {
      data: paginatedMovies,
      message: "Movies retrieved successfully",
      success: true,
      pagination: {
        page: filters.page!,
        limit: filters.limit!,
        total,
        totalPages,
      },
    }

    return NextResponse.json(response)
  } catch (error) {
    console.error("Error fetching movies:", error)
    return NextResponse.json(
      {
        data: [],
        message: "Internal server error",
        success: false,
      },
      { status: 500 },
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    const requiredFields = ["title", "genre", "duration", "releaseDate", "description"]
    for (const field of requiredFields) {
      if (!body[field]) {
        return NextResponse.json(
          {
            data: null,
            message: `Missing required field: ${field}`,
            success: false,
          },
          { status: 400 },
        )
      }
    }

    // Create new movie
    const newMovie: Movie = {
      id: mockMovies.length + 1,
      ...body,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    mockMovies.push(newMovie)

    const response: ApiResponse<Movie> = {
      data: newMovie,
      message: "Movie created successfully",
      success: true,
    }

    return NextResponse.json(response, { status: 201 })
  } catch (error) {
    console.error("Error creating movie:", error)
    return NextResponse.json(
      {
        data: null,
        message: "Internal server error",
        success: false,
      },
      { status: 500 },
    )
  }
}
