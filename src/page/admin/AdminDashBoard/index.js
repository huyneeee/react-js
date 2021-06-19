import React, { useEffect, useState } from 'react'
import { CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Sector, Tooltip, XAxis, YAxis } from 'recharts'
import authApi from '../../../api/authApi'
import categoryApi from '../../../api/categoryApi'
import { countOrder } from '../../../api/orderApi'
import productApi from '../../../api/productApi'
import Loading from '../../../components/Loading'

const AdminDashBoard = () => {
    const [admin, setAdmin] = useState({
        countCategory: '',
        countProduct: '',
        countOrder: '',
        contacts: [],
        orderRencent: [],
        subtotalInMonth: [],
        dataPieCharts: []
    })
    const [activeIndex, setActiveIndex] = useState(0);

    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchCount = async () => {
            try {
                const { data: countCategory } = await categoryApi.count();
                const { data: countProduct } = await productApi.countproduct();
                const { data: contacts } = await authApi.getAllContact();
                const { data: ordersRencent } = await authApi.orderRencent()
                const { data: subtotalInMonth } = await authApi.totalOrderInMonth6();
                const { data: countProductOfCategory } = await categoryApi.countProductOfCategory()
                countOrder().then(countOrder => {
                    setAdmin({
                        countCategory: countCategory,
                        countProduct: countProduct,
                        countOrder: countOrder,
                        contacts: contacts,
                        orderRencent: ordersRencent,
                        subtotalInMonth: subtotalInMonth,
                        dataPieCharts: countProductOfCategory
                    })
                }).then(() => {
                    setLoading(false);
                })

            } catch (error) {
                console.log("Failed to get data", error);
            }
        }
        fetchCount();
    }, []);
    const oderRecent = () => {
        return (
            <div className="px-10">
                <p className="text-md font-semibold text-main mb-2">Order Recent</p>
                <table>
                    {admin.orderRencent.map((c, index) =>

                        <tr className="text-left border-b border-main" key={index}>

                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {index}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {c.name_of_consignee}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                {c.address}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                (+84) {c.phone}
                            </td>
                            <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                ${c.subtotal}.00
                            </td>
                        </tr>
                    )}
                </table>
            </div>
        )
    }
    const ListContact = () => {
        return (
            <div className="px-10">
                <p className="text-md font-semibold text-main mb-2">Contact Recent</p>
                <table className="items-center w-full bg-transparent border-collapse  " >
                    <tbody>
                        {admin.contacts.map((c, index) =>

                            <tr className="text-left border-b border-main" key={index}>

                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {index}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {c.name}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    {c.email}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    (+84) {c.phone}
                                </td>
                                <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 font-bold ">
                                    {c.massage}
                                </td>
                            </tr>
                        )}

                    </tbody>
                </table>

            </div>
        )
    }
    const pieChart = () => {
        const data = admin.dataPieCharts.map(ele => {
            return {
                name: ele.name,
                value: ele.productList.length
            }
        })

        const onPieEnter = (_, index) => {
            setActiveIndex(index);
        }

        const renderActiveShape = (props) => {
            const RADIAN = Math.PI / 180;
            const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent, value, name } = props;
            const sin = Math.sin(-RADIAN * midAngle);
            const cos = Math.cos(-RADIAN * midAngle);
            const sx = cx + (outerRadius + 10) * cos;
            const sy = cy + (outerRadius + 10) * sin;
            const mx = cx + (outerRadius + 30) * cos;
            const my = cy + (outerRadius + 30) * sin;
            const ex = mx + (cos >= 0 ? 1 : -1) * 22;
            const ey = my;
            const textAnchor = cos >= 0 ? 'start' : 'end';

            return (
                <g>
                    <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
                        {payload.name}
                    </text>
                    <Sector
                        cx={cx}
                        cy={cy}
                        innerRadius={innerRadius}
                        outerRadius={outerRadius}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        fill={fill}
                    />
                    <Sector
                        cx={cx}
                        cy={cy}
                        startAngle={startAngle}
                        endAngle={endAngle}
                        innerRadius={outerRadius + 6}
                        outerRadius={outerRadius + 10}
                        fill={fill}
                    />
                    <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                    <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${name}(${value})`}</text>
                    <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                        {`(Rate ${(percent * 100).toFixed(2)}%)`}
                    </text>
                </g>
            );
        };

        return (
            <ResponsiveContainer width="100%" height="100%">
                <PieChart width={600} height={600}>
                    <Pie
                        activeIndex={activeIndex}
                        activeShape={renderActiveShape}
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        fill="#79a206"
                        dataKey="value"
                        onMouseEnter={onPieEnter}
                    />
                </PieChart>
            </ResponsiveContainer>
        );

    }
    const chartSubtotal = () => {
        const data = admin.subtotalInMonth.map(ele => {
            return {
                day: ele._id.day,
                total: ele.totalAmount
            }
        })

        return (
            <>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
                    </LineChart>
                </ResponsiveContainer>
            </>
        )
    }
    return (
        <>
            {loading ? (<Loading></Loading>)
                : (<>
                    <div className="flex flex-wrap justify-between py-5 px-10 bg-main my-10">
                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Category</h5>
                                            <span className="font-semibold text-xl text-blueGray-700">{admin.countCategory}</span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                <i className="fas fa-chart-pie"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Product</h5>
                                            <span className="font-semibold text-xl text-blueGray-700">{admin.countProduct}</span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                <i className="far fa-chart-bar"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                            <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                <div className="flex-auto p-4">
                                    <div className="flex flex-wrap">
                                        <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                            <h5 className="text-blueGray-400 uppercase font-bold text-xs">Total Order</h5>
                                            <span className="font-semibold text-xl text-blueGray-700">{admin.countOrder}</span>
                                        </div>
                                        <div className="relative w-auto pl-4 flex-initial">
                                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                <i className="fas fa-users"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" mt-10 flex flex-col ">
                        <div>
                            <div className="flex justify-center">
                                <p className="flex text-xl font-semibold">Biểu đồ doanh thu theo ngày trong tháng 6</p>
                            </div>
                            <div className=" flex w-full h-80">
                                {chartSubtotal()}
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-center">
                                <p className="flex text-xl font-semibold">Biểu đồ tổng số sản phẩm</p>
                            </div>
                            <div className=" flex flex-col w-full h-80 ">
                                {pieChart()}
                            </div>
                        </div>
                        <div className="flex bg-white h-auto my-5">
                            {ListContact()}
                        </div>
                        <div className="flex bg-white my-5">
                            {oderRecent()}
                        </div>

                    </div>

                </>
                )}

        </>
    )
}

export default AdminDashBoard
