import axios, {AxiosError} from "axios";
import { api, updateAxiosClient } from "@/utils/axios/axiosInstance";
import { ApiError } from "next/dist/server/api-utils";
import { menuList, menuGroup } from "@/utils/model/menu";

const storeId = 'user_1';

//전체메뉴 조회
export const getAllMenu = async(): Promise<menuList> => {
  try{
    const response = await api.get<menuList>(`/store/read/menu/${storeId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '전체 메뉴 정보 조회 실패 ')
    }
    throw error
  }
}

export const getGroupMenus = async(groupId: number): Promise<menuList['menus']> => {
  try{
    const response = await api.get<menuList['menus']>(`/store/read/menu/${groupId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '메뉴 그룹 기반 메뉴 정보 조회 실패 ')
    }
    throw error
  }
}

export const getGroupMenuOnly = async(): Promise<menuGroup[]> => {
  console.log("getGroupMenuOnly");
  try{
    const response = await api.get<menuGroup[]>(`/store/create/menu/${storeId}`);
    return response.data
  } catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '메뉴 그룹 정보 조회 실패 ')
    }
    throw error
  }
}

interface UpdateSingleSoldOutInput{
  menuId: number;
  isSoldOut: boolean;
}

interface sendBoolean{
  isSoldOut: boolean;
}

//개별 품절 업데이트
export const updateSingleSoldOut = async({menuId, isSoldOut}: UpdateSingleSoldOutInput) : Promise<sendBoolean> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<sendBoolean>(`/store/update/menu-sold-out/${menuId}`, {
      isSoldOut: isSoldOut
    });
    console.log('MenuId Array Data:', isSoldOut)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '아이템 개별 품절 업데이트 실패 ')
    }
    throw error
}
}

interface sendMenuIds{
  menuIds: number[];
  action: string;
}

//다중 품절 업데이트
export const updateMultifleSoldOut = async(selectedIds: number[]) : Promise<sendMenuIds> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<sendMenuIds>(`/store/read/menu/action`, {
      menuIds: selectedIds,
      action: 'Soldout'
    });
    console.log('MenuId Array Data:', selectedIds)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '아이템 다중 품절 업데이트 실패 ')
    }
    throw error
}
}

//다중 삭제 업데이트
export const updateMultifleDelete = async(selectedIds: number[]) : Promise<sendMenuIds> => {
  const request = updateAxiosClient();
  try{
    const response = await request.patch<sendMenuIds>(`/store/read/menu/action`, {
      menuIds: selectedIds,
      action: 'delete'
    });
    console.log('MenuId Array Data:', selectedIds)
    return response.data
  }catch(error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError<ApiError>
      throw new Error(axiosError.response?.data?.message || '아이템 다중 삭제 업데이트 실패 ')
    }
    throw error
}
}