<!DOCTYPE html>
<html lang="en-US" class="respondr">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
  <meta name="apple-mobile-web-app-capable" content="yes"/>
  <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
  <meta name="description" content="MyUW"/>
  <meta name="keywords" content="portal, uPortal, academic, higher education, open source, enterprise, JA-SIG, JASIG, Jasig"/>
  <base href="<%=getServletContext().getContextPath() %>/">
  <!-- CSS links -->
  <!-- Latest compiled and minified CSS -->
  <!-- <link href="css/font-awesome.min.css" rel="stylesheet" type="text/css"/> -->
  <link ng-if='portal.theme.name' ng-href="css/themes/{{portal.theme.name}}.${project.version}.css" rel="stylesheet" type="text/css"/>
  <link href="my-app/my-app.css" rel="stylesheet" type="text/css"/>
  <link rel="shortcut icon" href="bower_components/uw-ui-toolkit/dist/img/favicon.ico" type="image/x-icon"/>
  <link rel="stylesheet" href="bower_components/angular-material/angular-material.min.css">
</head>

<body>

  <jsp:include page="/static.html" />
  <!--The MyUW Body-->
  <uw-body></uw-body>

  <!--javascript-->
  <script type="text/javascript" src="js/config.js"></script>
  <script type="text/javascript" src="js/ga.js"></script>
  <script type="text/javascript" src="bower_components/requirejs/require.js" data-main="main"></script>

</body>
</html>
