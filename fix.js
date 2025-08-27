Hooks.on("renderSettings", (app, jhtml, data) => {
    const html = $(jhtml);
    const button = $(`<button type="button" data-tooltip="Set the performance mode to low."><i class="fas fa-bug"></i>iOS Fix</button>`);
    const location = html.find(".settings");
    location.append(button);
    button.on('click', () => {
        const currentFPS = game.settings.get("core","maxFPS");
        ui.notifications.warn("Performance mode set to low. Reloading the page to apply changes.", { permanent: true});
        setTimeout(async() => {
            await game.settings.set("core", "performanceMode", 0);
            await game.settings.set("core","maxFPS", Math.min(currentFPS, 40));
            window.location.reload();
        }, 2000)

    })
})
