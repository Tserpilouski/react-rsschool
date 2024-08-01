import { useEffect, useState } from 'react';
import { downloadCsv } from './downloadCSV';
import { PersonInfo } from '../service/type.type';

export const useDownloadCsv = (array: PersonInfo[]) => {
  const [file, setFile] = useState(downloadCsv(array));

  useEffect(() => {
    setFile(downloadCsv(array));
  }, [array]);
  return file;
};
