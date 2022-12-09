import React from 'react';
import './App.css';
//components
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import LittleCard from './components/littleCard'
import Table from "./components/Table"
import LineText from "./components/LineText";
import Chart from "./components/Charts";
import Alert from "./components/Alert";
import Api from "./api/api";
import { Icon } from '@iconify/react';




function App() {
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [Data, setData] = React.useState(null);

  React.useEffect(() => {
    const GetingData = async () => {
      try {
        setLoading(true);
        const general_stats = Api.Post('test-db', { action: 0 })
        const top_Profiles = Api.Post('test-db', {
          "action": 1,
          "paging": {
            "page": 0,
            "limit": 10
          }
        });
        const profile_stats = Api.Post('test-db', { "action": 2 });
        const top_activities = Api.Post('test-db', {
          "action": 3,
          "paging": {
            "page": 0,
            "limit": 30
          }
        });
        const tracking_charts = Api.Post('test-db', {
          "action": 4,
          "data": {
            "from": "2022-01-06",
            "to": "2022-12-06"
          }
        });
        const chiffre_daffaires = Api.Post('test-db', {
          "action": 5,
          "data": {
            "from": "2022-01-05",
            "to": "2022-12-06"
          }
        });
        await Promise.all([general_stats, top_Profiles, profile_stats, top_activities, tracking_charts, chiffre_daffaires]).then((data) => {
          setLoading(false);
          // console.log(data)
          setData({
            general_stats: data[0].data,
            top_Profiles: data[1].data,
            profile_stats: data[2].data,
            top_activities: data[3].data,
            tracking_charts: data[4].data,
            chiffre_daffaires: data[5].data
          })
        }
        )
      } catch (e) {
        setError(e);
      }

    }
    GetingData()
  }, [])

  function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
  }

  const General_Stats = [
    { title: "Profils créés", value: Data?.general_stats.total_profiles, icon: 'ic:baseline-edit-off' },
    { title: "Total Utilisateurs", value: Data?.general_stats.total_collaborators, icon: 'mdi:users' },
    { title: "% Onboarding", value: `${parseInt(percentage(Data?.general_stats.onboarding, Data?.general_stats.total_collaborators))}%`, icon: 'icon-park-outline:loading-one' },
    { title: "% Actifs", value: `${parseInt(percentage(Data?.general_stats.active, Data?.general_stats.total_collaborators))}%`, icon: 'material-symbols:rocket-launch-rounded' },
  ]

  return (
    <div className="bg-[#FFFAF5] w-screen min-h-screen">
      <Sidebar />
      <div className='ml-72 px-40 bg-[#FFFAF5] flex flex-col'>
        <Header />
        <LineText text="Dashboard" icon="material-symbols:dashboard" textSize="text-[2.2rem]" iconSize="11" />
        <div className='w-[95%] bg-[#CCB7B7] h-[.5px]'></div>
        {Data && <div className=' w-full flex flex-col gap-20 py-6'>
          {error && <Alert error={error} />}
          <div className='flex w-full flex-row justify-between'>
            <div className='flex w-auto flex-col gap-5'>
              {General_Stats.map((stat, index) => (
                <LittleCard key={index} title={stat.title} value={stat.value} icon={stat.icon} color="white" />))
              }
            </div>
            <div className='flex flex-col w-2/3 gap-4'>
              <div className='flex flex-row text-primaryBrown font-Steradian_md justify-center items-center'>
          <LineText text="Top 10 des profils par nombre d'utilisateurs" icon="uis:graph-bar" textSize="text-[1.7rem]" iconSize="9" />
              </div>
              <Table data={Data?.top_Profiles} ellipsis={false}/>
            </div>
          </div>
          <Chart />
        </div>}
      </div>
    </div>
  );
}

export default App;
