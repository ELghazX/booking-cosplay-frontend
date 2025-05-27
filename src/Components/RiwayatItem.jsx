import Swal from "sweetalert2";

export default function RiwayatItem({ item, onCancel }) {
    const statusStyles = {
        PENDING: "bg-yellow-100 text-yellow-800",
        CONFIRMED: "bg-green-100 text-green-800",
        CANCELLED: "bg-gray-100 text-gray-800"
      };
    
      const handleCancel = async () => {
        const result = await Swal.fire({
          title: "Konfirmasi",
          text: "Apakah Anda yakin ingin membatalkan booking ini?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonText: "Ya, batalkan!",
          cancelButtonText: "Batal"
        });
        if (result.isConfirmed) {
          try {
            await onCancel(item.id);
            Swal.fire("Berhasil!", "Booking berhasil dibatalkan!", "success");
          } catch (error) {
            Swal.fire("Gagal!", "Gagal membatalkan booking", "error");
          }
        }
      };

    return (
    <tr className="hover:bg-gray-50">
        <td className="px-6 py-4 text-sm text-gray-900">
        <div className="line-clamp-2">{item.nameItem}</div>
        </td>
        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
        {new Date(item.startDate).toLocaleDateString("id-ID")}
        </td>
        <td className="px-6 py-4 text-sm text-gray-500">{item.duration}</td>
        <td className="px-6 py-4 text-sm text-gray-500">
        {new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
        }).format(item.totalPrice)}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${statusStyles[item.status]}`}>
            {item.status}
        </span>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
        <button
            onClick={handleCancel}
            disabled={item.status !== "PENDING"}
            className={`text-sm px-3 py-1 rounded-md transition-colors ${
            item.status === "PENDING"
                ? "bg-red-500 hover:bg-red-600 text-white"
                : "bg-gray-200 text-gray-500 cursor-not-allowed"
            }`}
        >
            {item.status === "PENDING" ? "Batalkan" : "Tidak tersedia"}
        </button>
        </td>
    </tr>
    );
  }