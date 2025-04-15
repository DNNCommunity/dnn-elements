import type { Rule } from 'eslint';
import { noLabelSlotInCheckbox } from './rules/no-label-slot-in-checkbox';

export const rules: Record<string, Rule.RuleModule> = {
    'no-label-slot-in-checkbox': noLabelSlotInCheckbox,
};