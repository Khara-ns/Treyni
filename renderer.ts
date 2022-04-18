import { Webview } from "https://deno.land/x/webview@0.7.0-pre.1/mod.ts";

const webview = new Webview();
webview.navigate("http://localhost:8080/");
webview.run();