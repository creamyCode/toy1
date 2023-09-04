import { Dtos, Enums } from '@toy1/common';
import { IApiResult } from '../interfaces/api-result.interface';

export const loginApi: (
  dto: Dtos.LoginUserDto
) => Promise<IApiResult<string>> = async (dto: Dtos.LoginUserDto) => {
  try {
    const response = await fetch(`/api/${Enums.eApiVersions.V1}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dto),
    });

    const jsonData = await response.json();
    return {
      ok: response.ok,
      isUnExpected: false,
      data: jsonData.message,
    };
  } catch (error) {
    return {
      ok: false,
      isUnExpected: true,
      data: error as string,
    };
  }
};
