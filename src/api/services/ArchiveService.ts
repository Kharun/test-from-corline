import { API } from "../instance";

export const ArchiveService = {
  getArchiveList: (year: number, month: number) =>
    API.get(`archive/v1/${year}/${month}.json`, {
      params: {
        "api-key": "rJ7XaUF0IQZG7UYu0jp85Mdqpeu5MnbP",
      },
    }),
};
