
import { AxiosInstance } from "axios";
import { http } from "../../../../shared/api/http";
import { baseURL } from "../../../../shared/config/path";
import { ListFeaturedDrugInputDto, ListFeaturedDrugOutputDto } from "./listFeaturedDrug.dto";

class ListFeaturedDrugService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(params: ListFeaturedDrugInputDto): Promise<ListFeaturedDrugOutputDto> {
		const result = await this.api.get<ListFeaturedDrugOutputDto>(
			baseURL + "/drug/ndc.json",
            { params }
		);

		return result.data;
	}
}

const listFeaturedDrugService = new ListFeaturedDrugService(http);

export { listFeaturedDrugService };