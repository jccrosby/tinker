import _ from 'lodash';

export class User {

    constructor(config) {
        this.firstName = _.get(config, 'firstName', '');
        this.lastName = _.get(config, 'lastName', '');
    }

    formatName() {
        return this.firstName + ' ' + this.lastName;
    }
}
