import React, { useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { Text } from 'react-native-elements';

export const Mission = () => {
    return (
        <Card>
            <Card.Title>Our Mission</Card.Title>
            <Card.Divider />
            <Text>We present a curated database of the best campsites in the vast woods and backcountry of the World Wide Web Wilderness. We increase access to adventure for the public while promoting safe and respectful use of resources. The expert wilderness trekkers on our staff personally verify each campsite to make sure that they are up to our standards. We also present a platform for campers to share reviews on campsites they have visited with each other.</Text>
        </Card>
    );
};

const AboutScreen = () => {
    const [partners, setPartners] = useState(PARTNERS);

    return (
        <ScrollView>
            <Mission />
            <Card>
                {partners.map((partner) => {
                    return (
                        <ListItem key={partner.id}>
                            <Avatar rounded source={partner.image} />
                            <ListItem.Content>
                                <ListItem.Title>{partner.name}</ListItem.Title>
                                <ListItem.Subtitle>{partner.description}</ListItem.Subtitle>
                            </ListItem.Content>
                        </ListItem>
                    )
                })}
            </Card>
        </ScrollView>
    );
};

export default AboutScreen;