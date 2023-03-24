import RenderCampsite from "../features/campsites/RenderCampsite";

const CampsiteInfoScreen = ({ campsite }) => {
    return (
        <RenderCampsite campsite={campsite} />
    );
};

export default CampsiteInfoScreen;