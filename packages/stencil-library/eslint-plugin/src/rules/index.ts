import { rule as buttonFormButtonTypeToType } from "./button-formButtonType-to-type.js";
import { rule as dnnInputNoDisableValidityReporting } from "./dnn-input-no-disableValidityReporting.js";
import { rule as dnnModalNoBackgroundDismiss} from "./dnn-modal-no-background-dismiss.js"
import { rule as dnnSearchboxNoDebounced } from "./dnn-searchbox-no-debounced.js"
import { rule as dnnSelectNoDisableValidityReporting} from "./dnn-select-no-disableValidityReporting.js"
import { rule as noLabelSlotInCheckbox } from "./no-label-slot-in-checkbox.js";

export const rules = {
    "button-formButtonType-to-type": buttonFormButtonTypeToType,
    "dnn-input-no-disableValidityReporting": dnnInputNoDisableValidityReporting,
    "dnn-modal-no-background-dismiss": dnnModalNoBackgroundDismiss,
    "dnn-searchbox-no-debounced": dnnSearchboxNoDebounced,
    "dnn-select-no-disableValidityReporting": dnnSelectNoDisableValidityReporting,
    "no-label-slot-in-checkbox": noLabelSlotInCheckbox,
}