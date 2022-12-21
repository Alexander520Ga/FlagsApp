import {useEffect, useState} from 'react';
import {IIData} from '../interfaces/dataInterface';
import {dataFetch} from './dataFetch';
const useAllData = () => {
  const [data, setData] = useState<IIData[]>([]);

  useEffect(() => {
    dataFetch().then(res => setData(res));
  }, []);

  return {data, setData};
};

export default useAllData;
