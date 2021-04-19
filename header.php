<!DOCTYPE html>
<html lang="en">
  <head>
    <meta name="viewport" content="width=device-width">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1" />
    <meta name="description" content="Frontier Tailwind Template (change in header.php)">

    <!-- Global site tag (gtag.js) - Google Analytics -->

    <?php wp_head(); ?>
  </head>
  <body <?php body_class('bg-dark-blue'); ?>>

  <?php
  include 'components/Header/navbar.php'
  ?>