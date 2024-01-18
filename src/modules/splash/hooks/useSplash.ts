/* eslint-disable prettier/prettier */
import { NavigationProp, ParamListBase, useNavigation } from '@react-navigation/native';
import { MethodEnum } from '../../../enums/methods.enum';
import { MenuUrl } from '../../../shared/enums/MenuUrl.wnum';
import { getAuthorizationToken } from '../../../shared/functions/connection/auth';
import {useRequest} from '../../../shared/hooks/useRequest';
import { ListaType } from '../../../shared/types/ListaType';

export const useSplash = () => {
  const {request} = useRequest();
  const {reset} = useNavigation<NavigationProp<ParamListBase>>();

  const handleOnPress = async () => {
    const token = await getAuthorizationToken();
    var validacao = false;

    const result:ListaType[] |undefined =  await request<ListaType[]>({
      url: 'http://192.168.2.181:8080/TitulosEmAbertosSemAprovacao',
      method: MethodEnum.GET,
    });
    console.log(result+"dsada");
   validacao = true
    console.log(validacao+"dadsadada");
    if (token && validacao){
        reset({
            index:0,
            routes:[{ name: MenuUrl.HOME}],
        });
    } else {
        reset({
            index:0,
            routes:[{ name: MenuUrl.LOGIN}],
        });
    }
  };
  return {
    handleOnPress,
};
};
