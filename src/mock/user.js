import {faker} from '@faker-js/faker';
import {sample} from 'lodash';

// ----------------------------------------------------------------------

const UserData = [...Array(24)].map((_, index) => ({
    id: faker.datatype.uuid(),
    avatarUrl: `/static/mock-images/avatars/avatar_${index + 1}.jpg`,
    name: faker.name.findName(),
    company: faker.company.companyName(),
    isVerified: sample([true, false]),
    subscribe: sample([true, false]),
    type: sample([
        'Business',
        'Marketing Service',
        'Services',
        'Ecommerce',
        'Software',
        'NGO',
    ]),
}));

export default UserData;
