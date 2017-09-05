export function fakeRun({ steps = [] } = fakeCase, resultReader) {
    let index = 0;
    (function resultEmitter() {
        if (index >= steps.length) return;
        setTimeout(_ => {
            const step = steps[index]
            const passOrFail = index === steps.length - 1 ?
                [true, false][Math.round(Math.random(10), 0)] : true;

            const result = {
                image: `img/sample_screenshots/_step_${index + 1}.png`,
                imageDataUrl: "",
                message: "",
                pass: passOrFail,
                caseId: step.caseId,
                stepId: step.id,
                stepOrder: step.order,
                meta: {},
                createdAt: Date.now()
            }

            index++;
            const status = result.pass ?
                index < steps.length ? "pending" : "done"
                : "failed"

            resultReader(result, status);
            if (result.pass) return resultEmitter();

        }, 3500)
    })()
}

const fakeSteps = [
    {
        lastPassed: "",
        isPassing: false,
        name: "",
        order: 1,

    },
    {
        lastPassed: "",
        isPassing: false,
        name: "",
        order: 2,

    },
    {
        lastPassed: "",
        isPassing: false,
        name: "",
        order: 3,

    },
    {
        lastPassed: "",
        isPassing: false,
        name: "",
        order: 4,

    },
    {
        lastPassed: "",
        isPassing: false,
        name: "",
        order: 5,

    },
]

export const fakeCase = { steps: fakeSteps };