
import { useAppSelector } from "../../../app/providers/store/store";
import CommunityCard from "./CommunityCard";
import { Grid } from '@mantine/core';
const CoucheList = () => {

  const teacherAll = useAppSelector((state) => state.community.couches);
    return (
        <div> <Grid justify="center" align="stretch">
            {teacherAll.map((el) => (
        <div key={el.id}>
          <CommunityCard el={el} />
        </div>
      ))}</Grid>
        </div>
    );
}

export default CoucheList;
