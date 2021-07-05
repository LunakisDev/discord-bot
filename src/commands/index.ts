import { ping } from './ping';
import { help } from './help';
import { bruheg } from './bruheg';
import { boratorium } from './boratorium';
import { efb } from './efb';
import { deadzones } from './deadzones';
import { screens } from './screens';
import { when } from './when';
import { ban } from './ban';
import { unban } from './unban';
import { trythis } from './trythis';
import { experimental } from './experimental';
import { versions } from './versions';
import { membercount } from './membercount';
import { installer } from './installer';
import { roleinfo } from './roleinfo';
import { CommandDefinition } from '../lib/command';
import Logger from '../lib/logger';

const commands: CommandDefinition[] = [
    ping,
    help,
    bruheg,
    boratorium,
    efb,
    deadzones,
    screens,
    when,
    ban,
    unban,
    trythis,
    experimental,
    versions,
    membercount,
    installer,
    roleinfo,
];

const commandsObject: { [k: string]: CommandDefinition } = {};

for (const def of commands) {
    for (const name of (typeof def.name === 'string' ? [def.name] : def.name)) {
        if (commandsObject[name]) {
            Logger.warn(`Duplicate command/alias inserted: ${name}`);
        }
        commandsObject[name] = def;
    }
}

export default commandsObject;