import { AxiosInstance } from "axios";
import { http } from "../../../../shared/api/http";
import { baseURL } from "../../../../shared/config/path";
import { SearchDrugsInputDto, SearchDrugsOutputDto } from "./searchDrugs.dto";

class SearchDrugsService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(params: SearchDrugsInputDto): Promise<SearchDrugsOutputDto> {
		const result = await this.api.get<SearchDrugsOutputDto>(
			baseURL + "/drug/ndc.json",
            { params }
		);

		return result.data;
	}
}

const searchDrugsService = new SearchDrugsService(http);

export { searchDrugsService };