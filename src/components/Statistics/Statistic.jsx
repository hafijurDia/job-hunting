import React,{useEffect} from 'react';
import Banner from '../Banner/Banner';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  Rectangle,
  ComposedChart,
  Area,
  Scatter,
  PieChart,
  Pie,

} from 'recharts';
import Footer from '../Footer/Footer';




let marks= [
  { id: 1, assignmentName: "Assignment 1", mark: 85 },
  { id: 2, assignmentName: "Assignment 2", mark: 45 },
  { id: 3, assignmentName: "Assignment 3", mark: 50 },
  { id: 4, assignmentName: "Assignment 4", mark: 63 },
  { id: 5, assignmentName: "Assignment 5", mark: 79 },
  { id: 6, assignmentName: "Assignment 6", mark: 90 },
  { id: 7, assignmentName: "Assignment 7", mark: 70 },
  { id: 8, assignmentName: "Assignment 8", mark: 68 },
 
]
const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];
const pageTitle = "Statistics";
export default function Statistic() {

  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page when component mounts
  }, []);
  return (
    <>
      <Banner pageTitle={pageTitle}></Banner>
      <div className='container mx-auto'>
        <div className='chartarea w-100 text-center mt-20'>
        <LineChart
          width={1000}
          height={300}
          data={marks}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignmentName" />
          <YAxis dataKey="mark" />
          <Tooltip />
          <Legend />
          <Line dataKey="mark" stroke="#111111"></Line>
  
        </LineChart>

        <BarChart
          width={500}
          height={300}
          data={marks}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="assignmentName" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="mark" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
         
        </BarChart>
        <ComposedChart
          width={500}
          height={400}
          data={marks}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="assignmentName" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
          <Bar dataKey="mark" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="mark" stroke="#ff7300" />
          <Scatter dataKey="mark" fill="red" />
        </ComposedChart>

        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
          </div> 
      </div>
        <Footer></Footer>

    </>
  )
}
