import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Download, CreditCard, Banknote, Smartphone } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function PaymentsPage() {
  const payments = [
    {
      id: "PAY001",
      bookingId: "BK001",
      customerName: "Nguyễn Văn A",
      amount: "240,000₫",
      method: "Thẻ tín dụng",
      status: "Thành công",
      transactionId: "TXN123456789",
      paymentDate: "2024-01-18 10:35",
      gateway: "VNPay",
    },
    {
      id: "PAY002",
      bookingId: "BK002",
      customerName: "Trần Thị B",
      amount: "450,000₫",
      method: "Chuyển khoản",
      status: "Đang xử lý",
      transactionId: "TXN987654321",
      paymentDate: "2024-01-19 15:50",
      gateway: "MoMo",
    },
    {
      id: "PAY003",
      bookingId: "BK004",
      customerName: "Phạm Văn D",
      amount: "360,000₫",
      method: "Ví điện tử",
      status: "Thất bại",
      transactionId: "TXN456789123",
      paymentDate: "2024-01-19 20:15",
      gateway: "ZaloPay",
    },
  ]

  const stats = [
    {
      title: "Tổng doanh thu hôm nay",
      value: "12,450,000₫",
      icon: CreditCard,
      color: "text-green-600",
    },
    {
      title: "Giao dịch thành công",
      value: "156",
      icon: Banknote,
      color: "text-blue-600",
    },
    {
      title: "Giao dịch thất bại",
      value: "8",
      icon: Smartphone,
      color: "text-red-600",
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Quản Lý Thanh Toán</h1>
          <p className="text-gray-600">Theo dõi và quản lý các giao dịch thanh toán</p>
        </div>
        <Button>
          <Download className="h-4 w-4 mr-2" />
          Xuất báo cáo
        </Button>
      </div>

      {/* Payment Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-gray-600">{stat.title}</CardTitle>
                <Icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Tìm kiếm theo mã giao dịch, tên khách hàng..." className="pl-10" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Lọc
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Mã thanh toán</TableHead>
                  <TableHead>Mã đặt vé</TableHead>
                  <TableHead>Khách hàng</TableHead>
                  <TableHead>Số tiền</TableHead>
                  <TableHead>Phương thức</TableHead>
                  <TableHead>Cổng thanh toán</TableHead>
                  <TableHead>Trạng thái</TableHead>
                  <TableHead>Thời gian</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {payments.map((payment) => (
                  <TableRow key={payment.id}>
                    <TableCell className="font-medium">{payment.id}</TableCell>
                    <TableCell>{payment.bookingId}</TableCell>
                    <TableCell>{payment.customerName}</TableCell>
                    <TableCell className="font-medium">{payment.amount}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {payment.method === "Thẻ tín dụng" && <CreditCard className="h-4 w-4" />}
                        {payment.method === "Chuyển khoản" && <Banknote className="h-4 w-4" />}
                        {payment.method === "Ví điện tử" && <Smartphone className="h-4 w-4" />}
                        {payment.method}
                      </div>
                    </TableCell>
                    <TableCell>{payment.gateway}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          payment.status === "Thành công"
                            ? "default"
                            : payment.status === "Đang xử lý"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {payment.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{payment.paymentDate}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
