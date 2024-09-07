import { AxiosInstance } from "axios";
import { http } from "../../../../shared/api/http";
import { baseURL } from "../../../../shared/config/path";
import { ListDrugsInputDto, ListDrugsOutputDto } from "./listDrugs.dto";

class ListDrugsService {
	constructor(private readonly api: AxiosInstance) {}

	async execute(params: ListDrugsInputDto): Promise<ListDrugsOutputDto> {
		const result = await this.api.get<ListDrugsOutputDto>(
			baseURL + "/drug/ndc.json",
            { params }
		);

		return result.data;
	}
}

const listDrugsService = new ListDrugsService(http);

export { listDrugsService };